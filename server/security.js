// // Any client may insert, update, or remove a post without restriction
// Posts.permit(['insert', 'update', 'remove']).apply();

// // No clients may insert, update, or remove posts
// Posts.permit(['insert', 'update', 'remove']).never().apply();

// // Clients may insert posts only if a user is logged in
// Posts.permit('insert').ifLoggedIn().apply();

// // Clients may remove posts only if an admin user is logged in
// Posts.permit('remove').ifHasRole('admin').apply();

// // Admin users may update any properties of any post, but regular users may
// // update posts only if they don't try to change the `author` or `date` properties
// Posts.permit('update').ifHasRole('admin').apply();
// Posts.permit('update').ifLoggedIn().exceptProps(['author', 'date']).apply();


// never() - Prevents the database operations from untrusted code. Should be the same as not defining any rules, but it never hurts to be extra careful.
// ifLoggedIn() - Allows the database operations from untrusted code only when there is a logged in user.
// ifHasUserId(userId) - Allows the database operations from untrusted code only for the given user.
// ifHasRole(role) - Allows the database operations from untrusted code only for users with the given role. Using this method requires adding the alanning:roles package to your app. If you use role groups, an alternative syntax is ifHasRole({role: role, group: group})
// onlyProps(props) - Allows the database operations from untrusted code for the given top-level doc properties only. props can be a string or an array of strings.
// exceptProps(props) - Allows the database operations from untrusted code for all top-level doc properties except those specified. props can be a string or an array of strings.


//Security.permit(['insert', 'update']).collections([Collection1, Collection2])...ruleChainMethods()...apply();