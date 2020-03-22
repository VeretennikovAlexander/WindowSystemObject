
function Console() {

    this.log = function (str) {

        if (str.join) {
            str = str.join("")
        }

        str = new Date() + ": "+ str
        this.write(str)
    }

    this.write = function (str) {

    }
}

this.console = new Console()
