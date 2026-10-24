// Sets the version (Android only installs an update when versionCode goes up) and, when a key is given, release signing.
// Usage: node gradle-setup.js 1.2.0 [sign]
const fs = require('fs');
const path = require('path');
const [version, sign] = process.argv.slice(2);
const [a, b, c] = version.split('.').map(n => parseInt(n, 10) || 0);
const code = a * 10000 + b * 100 + c;
let extra = `
android {
    defaultConfig {
        versionCode ${code}
        versionName "${version}"
    }
}
`;
if (sign === 'sign') extra += `
android {
    signingConfigs {
        kartograaf {
            storeFile file(System.getenv("KS_PATH"))
            storePassword System.getenv("ANDROID_KEYSTORE_PASSWORD")
            keyAlias System.getenv("ANDROID_KEY_ALIAS")
            keyPassword System.getenv("ANDROID_KEY_PASSWORD")
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.kartograaf
        }
    }
}
`;
fs.appendFileSync(path.join(__dirname, 'android', 'app', 'build.gradle'), extra);
// The app may hand a downloaded update to Android's installer (Android still asks the user to confirm).
const manifest = path.join(__dirname, 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
const perm = '<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />';
let xml = fs.readFileSync(manifest, 'utf8');
if (!xml.includes(perm)) fs.writeFileSync(manifest, xml.replace('</manifest>', `    ${perm}\n</manifest>`));
console.log(`versie ${version} (code ${code})${sign === 'sign' ? ', ondertekend' : ''}`);
