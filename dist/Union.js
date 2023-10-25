"use strict";
let userId;
userId = 1;
userId = "dsfsdfsfsfrwerwerew432";
function displayUserId(userId) {
    console.log(`UserId Is ${userId}`);
    if (typeof userId === "string") {
        return userId.toUpperCase();
    }
    return userId;
}
let user1 = displayUserId(userId);
console.log(user1);
