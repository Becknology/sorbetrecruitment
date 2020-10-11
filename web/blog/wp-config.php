<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'PH707486_sorbetrecrui' );

/** MySQL database username */
define( 'DB_USER', 'sorbetrecrui' );

/** MySQL database password */
define( 'DB_PASSWORD', '#+,^5V+WDb;{U@>4' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql15.namesco.net' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';Sl#w~{)sTaH5E&uZ(B> nMf}Nrv)51TBc|Hn,RTtqV3}jzz:cV2r~A-|ikCT8Z ' );
define( 'SECURE_AUTH_KEY',  '7PcgGLSM+M<.ZaLlCOGT<Nz}Ac.QH<]/Ry@ox#n8wF!}KW:^}8w,`#I)CY0$Y#;#' );
define( 'LOGGED_IN_KEY',    'ZwK}xbksgs76g?syy=[3D@=&a+^LB7k>mFD4u<_0psU,{($bsg<Rcm.zJij~:Cl>' );
define( 'NONCE_KEY',        '@s)aH@QdN!EEah%Fw+yuvl$/kJbQHb:8Da&y=@j/:s1v=4qaxIOYie:`T6Ec0p}W' );
define( 'AUTH_SALT',        'IAHJQ$}#B6&TxUBPL&,rm:DAz0H*%O-fTW.c5GBnH{:$AUT_F1I>7@uR{(W+V0+x' );
define( 'SECURE_AUTH_SALT', '[+h)_D63F+as{C&3V(E&NvfN%!OK<AUdi?/O`/RYun|_b}xXlZv:a5XMEY$[-=9H' );
define( 'LOGGED_IN_SALT',   's<7.Y2(U~%@GYU>@yFtI/)CUCl[d4*GvmI1j:mxo{:op}G]y3 [S=&Qqz2fl7H}v' );
define( 'NONCE_SALT',       'j=$U?{Mi==E$Vt3X<?fOZoM&[mkE7_^8`t8|I[OF/Ks[$l{._vafJ0sTp5KsbO{Z' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
