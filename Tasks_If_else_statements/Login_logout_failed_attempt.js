//Track failed login attempts. Lock the account after 3 failed attempts.

let attempts = 0;

if (attempts === 3) {
    console.log(`🔒 Account Locked-contact support: ${attempts} failed attempts`);
} else if (attempts === 2) {
    console.log(`1 attempt left before lockout: ${attempts} failed attempts`);
} else if (attempts === 0) {
    console.log(`Login successful: ${attempts} failed attempt`);
}   