function checkLogin() {
    var curuser = WAF.directory.currentUser();
    if (curuser != null) return true;
    else return false;
}