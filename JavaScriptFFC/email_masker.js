function maskEmail(email){
    const [username, domain] = email.split("@");

    const firstName = username[0];
    const lastName = username[username.length - 1];
    const mask = "*".repeat(username.length - 2);

    return `${firstName}${mask}${lastName}@${domain}`
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));