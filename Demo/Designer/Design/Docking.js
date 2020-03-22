

function docOnDockControlCreate(sender, control, dockTarget, context) {
    if (control.type == "Frame") {
        control.color = 0x00BEAE9E
        control.parentBackground = false
    }
    if (control.type == "PageControl") {
        if (control.docking.pageControlTag == 1) {
            control.headerVisible = false
            control.tabsAlign = o.translate("AL_TOP")
            control.flatButtons = false
            control.showSingleTab = true
            control.tabCloseButton = true
            control.hideClippedTabs = true

            control.tabColors.selected.color = 0x00FFFFFF
            control.tabColors.color = 0x00BEAE9E
            control.tabColors.selected.controlFocused.color = 0x00D7F7FF
            control.closeButtonColors.hot.color = 0x0055DDFF
            control.chevronColors.hot.color = 0x0055DDFF
        } else {
            control.closeButtonColors.hot.color = 0x0055DDFF
            control.closeButtonColors.hot.fontColor = 0
        }
    }
    if (control.type == "Form") {
        control.onEnterSizeMove = function (sender) {
            sender.layering.alpha = 170
            sender.layering.layered = true
        }
        control.onExitSizeMove = function (sender) {
            sender.layering.layered = false
        }

        function hasDocument(control) {
            var document = control.userData
            if (document)
                if (document.isDocument) {
                    return true
                }
            return false
        }

        function getInnerDocument(sender) {
            if (sender.controls.count != 1) {
                return null
            }
            var control = sender.controls.item(0)
            if (hasDocument(control)) {
                return control
            }
            return null
        }

        control.onHide = function (sender, resultPtr) {
            var control = getInnerDocument(sender)
            if (control == null) {
                return
            }
            removeDocument(control)
        }

        control.onCloseQuery = function (sender, resultPtr) {
            var documents = []
            
            $(sender).visit(function (item) {
                if (hasDocument(item)) {
                    documents.push(item)
                }
            })

            var result = checkModified(documents)

            if (!result) {
                resultPtr.value = false
            }
        }

        updateFormEvents(control)   
    }
}

function docOnBeginDock(sender, dockTarget, context) {

}

function initDockingProperties(control) {
    control.onDockControlCreate = docOnDockControlCreate
    control.onBeginDock = docOnBeginDock
}

this.initDockingProperties = initDockingProperties