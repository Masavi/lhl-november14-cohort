const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;
const PASSWORD = 'i_love_cats';
const OTHER_PASSWORD = 'dogs_rule';

// Process to create hash and store it
const salt = bcrypt.genSaltSync(SALT_ROUNDS);
console.log(salt);

const hash = bcrypt.hashSync(PASSWORD, salt);
console.log('Hash: ', hash);

// Process to compare password and hash for login
const isMatch = bcrypt.compareSync(OTHER_PASSWORD, hash);
console.log('Are passwords the same? ', isMatch);