<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once 'google-api-php-client/vendor/autoload.php';
//use Google\Spreadsheet\DefaultServiceRequest;
//use Google\Spreadsheet\ServiceRequestFactory;
	
if(isset($_POST)){
	$name = $_POST['name'];
	$contractor = $_POST['contractor'];
	$website = $_POST['website'];
	$phone_no = $_POST['phone_no'];
	$email = $_POST['email'];	

	putenv('GOOGLE_APPLICATION_CREDENTIALS=credentials.json');
	$client = new Google_Client;
	$client->useApplicationDefaultCredentials();
	$client->setApplicationName("My App");
	$client->setScopes(['https://www.googleapis.com/auth/drive','https://spreadsheets.google.com/feeds']);
	if ($client->isAccessTokenExpired()) $client->refreshTokenWithAssertion();
	$accessToken = $client->fetchAccessTokenWithAssertion()["access_token"];
	$service = new Google_Service_Sheets($client);
	$sheet_id = "1xtXSgZz9RaRJVD-cbxAxclfDusyC4gCdqtd5oFfZcYs";

	$options = array('valueInputOption' => 'RAW');
	$values = [[date('Y-m-d H:i:s'), $name, $contractor, $website, $phone_no, $email]];
	$body   = new Google_Service_Sheets_ValueRange(['values' => $values]);
	$result = $service->spreadsheets_values->append($sheet_id, 'A1:F1', $body, $options);
	echo "Successfully Send";
}
?>