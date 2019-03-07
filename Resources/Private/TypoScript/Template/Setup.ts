config.baseURL = http://training.local
config.compressCss = 1
config.compressJs = 1
config.concatenateCss = 1
config.concatenateJs = 1

config.linkVars = L(1)
config.sys_language_mode = content_fallback
config.sys_language_uid = 0
config.language = de
config.locale_all = de_DE
config.htmlTag_setParams = lang="de" dir="ltr" class="no-js"

[globalVar = GP:L = 1]
config.sys_language_uid = 1
config.language = en
config.locale_all = en_GB
config.htmlTag_setParams = lang="en" dir="ltr" class="no-js"
[global]

lib.title = TEXT
lib.title.value = Life is beautiful

lib.mainTemplate = FLUIDTEMPLATE
lib.mainTemplate {
	
    templateName = TEXT
    templateName.stdWrap {
        cObject = TEXT
        cObject {
            data = levelfield:-2,backend_layout_next_level,slide
            override.field = backend_layout
            split {
                token = pagets__
                1.current = 1
                1.wrap = |
            }
        }
        ifEmpty = Default
    }

    templateRootPaths {
            10 = {$path.private}Templates/Page/
    }

    layoutRootPaths {
            10 = {$path.private}Layouts/Page/
    }

    partialRootPaths {
            10 = {$path.private}Partials/Page/
    }

    variables {
        userData < lib.userData
        languageMenu < lib.languageMenu
        navigation < lib.navigation
        homeLink < lib.homeLink
        impressumLink < lib.impressumLink
        tripOverview < lib.tripOverview
    }

    settings {
        title = Life is beautiful
    }

}

config.pageTitle.stdWrap.cObject = HMENU
config.pageTitle.stdWrap.cObject {
        special = rootline
        special.reverseOrder = 1
        special.range = 1|-1
        1 = TMENU
        1.NO.doNotLinkIt = 1
        1.NO.linkWrap = | |*| > |*|
        1.NO.stdWrap.noTrimWrap = | | |
}

page = PAGE
page {

    headerData.5 < lib.backgroundImage

    meta {
        viewport = width=device-width, initial-scale=1.0

        description.data = page:description
        og:description.data = page:description
        og:description.attribute = property
    }

    10 < lib.mainTemplate

    includeCSS {
        training = fileadmin/Resources/Public/Stylesheets/training.css
    }

    includeCSSLibs {
		googleFont = https://fonts.googleapis.com/css?family=Indie+Flower|Libre+Barcode+128+Text|Muli|Material+Icons
		googleFont.external = 1
		googleFont.disableCompression = 1

		materialize = https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css
		materialize.external = 1
		materialize.disableCompression = 1
	}

    includeJSFooter {
		training = fileadmin/Resources/Public/Javascript/training.js
	}

    includeJSFooterlibs {
		jquery = https://code.jquery.com/jquery-3.2.1.min.js
        jquery.external = 1
        jquery.disableCompression = 1

		materialize = https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js
		materialize.external = 1
		materialize.disableCompression = 1
	}
}

[globalVar = GP:debug = 1]
page.includeCSS >
page.includeCSSLibs >
page.includeJSFooter >
page.includeJSFooterlibs >
page.10.settings.debug = 1
[global]
