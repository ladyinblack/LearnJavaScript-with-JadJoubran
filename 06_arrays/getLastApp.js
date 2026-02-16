/**
 * @param {array} apps
 */
function getLastApp(apps) {
    return apps[apps.length - 1];
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"]));
console.log(getLastApp(["Clock", "Contacts"]));