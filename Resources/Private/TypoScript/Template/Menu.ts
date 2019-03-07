lib.userData = FLUIDTEMPLATE
lib.userData {
        templateName = MenuBarData

	templateRootPaths {
		10 = {$path.private}Templates/FeUser/
	}

        dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
                10 {
                        if.isTrue.data = TSFE:fe_user|user|uid
                        table = fe_users
                        pidInList = 11
                        where.data = TSFE:fe_user|user|uid
                        where.wrap = uid=|
                        as = userData
                        dataProcessing {
                                10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                                10 {
                                        references.fieldName = image
                                        as = images
                                }
                        }
                }
        }

}

lib.languageMenu = FLUIDTEMPLATE
lib.languageMenu {
        templateName = language

	templateRootPaths {
		10 = {$path.private}Templates/Menu/
	}

    dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
        10 {
            special = language
            special.value = 0,1
            as = translations
        }
    }
}

lib.homeLink = HMENU
lib.homeLink {
        special = list
        special.value = 1
        1 = TMENU
        1 {
                NO.wrapItemAndSub = <li>|</li>
                NO.stdWrap.wrap = <i class="material-icons">home</i>|
        }
}

lib.navigation = HMENU
lib.navigation {
        excludeUidList = 6
        1 = TMENU
        1 {
                expAll = 1
                NO.wrapItemAndSub = <li>|</li>
                NO.ATagParams = class="waves-effect waves-orange"
                CUR < .NO
                CUR = 1
                CUR.wrapItemAndSub = <li class="active">|</li>
                IFSUB = 1
                IFSUB.doNotLinkIt = 1
                IFSUB.wrapItemAndSub = <li><ul class="collapsible collapsible-accordion"><li>|</li></ul></li>
                IFSUB.linkWrap = <span class="collapsible-header waves-effect waves-orange">|</span>
        }
        2 = TMENU
        2 {
                wrap = <div class="collapsible-body"><ul>|</ul></div>
                NO.wrapItemAndSub = <li>|</li>
                NO.ATagParams = class="waves-effect waves-orange"
                CUR < .NO
                CUR = 1
                CUR.wrapItemAndSub = <li class="active">|</li>
        }
}

lib.tripOverview = FLUIDTEMPLATE
lib.tripOverview {
        templateName = tripOverview

	templateRootPaths {
		10 = {$path.private}Templates/Menu/
	}

    dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
        10 {
            special = directory
            special.value = 2
            levels = 1
            as = trips
            dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                10.references.fieldName = media
            }
        }
    }
}