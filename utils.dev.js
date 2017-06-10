module.exports = {

    getAPIURL: function () {
        return "http://localhost:" + this.getServerApiPort() + "/";
    },

    getServerApiPort: function () {
        return 3000;
    }
}