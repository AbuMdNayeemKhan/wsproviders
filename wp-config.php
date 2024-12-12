<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wsproviders' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'P<ULe4y61A;Q2`#:qbZg0.aSC5)*Y)PFez22s[jWVd3A4y^gGmP%j(W) u53PA2+' );
define( 'SECURE_AUTH_KEY',  '9QitW&UCP6gcK%4nW_Ip_6LCd!thTveFMjl|C% ;0L,+cb!IA-]^C%yW?XL 5)2~' );
define( 'LOGGED_IN_KEY',    'Jb;mijEg<>{}NOY3-[4{*ifK*-rTjuc|xpCr6bOB7iFF40y&0uT:B!R;{p,57;w@' );
define( 'NONCE_KEY',        'c Z*.?4k !{yD[- {*F`lov8Bj{Kvy#o_B8m2Ta@K.FKEF1`CwfdY $g53E[IzL:' );
define( 'AUTH_SALT',        'F,Nq}wB=[[NRI!cst%ibavSf69#]=Wh=,GZ45:58,Z){!KXZO3QJ#KJ,JT~65zyO' );
define( 'SECURE_AUTH_SALT', 'F?M&<[FVT]bAp|4L88ZQMD^?O`9`4*n|:A.l{d/FX2LZZ+Od4:cP?/}#1G!oor|g' );
define( 'LOGGED_IN_SALT',   'FRrF~=*}yMg93CC47.<>vg0+a1t>]<qQi3mpITa0_@|Jx{49Sg j[Hqs4arTx-oi' );
define( 'NONCE_SALT',       'EE46~Zf;=n3T+fT,7Ua!l n[~=X]MCkx*5]g>@d}?t()uxhfFGDUBdo4R^}]_mV6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
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
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
