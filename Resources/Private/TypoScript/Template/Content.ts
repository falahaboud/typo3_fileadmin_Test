lib.contentElement {
  layoutRootPaths.20 = {$path.private}Layouts/Content/ 
  templateRootPaths.20 = {$path.private}Templates/Content/        
}

lib.content < styles.content.get
lib.content {
  select.where.field = column
  select.where.wrap = colPos = |
}

lib.impressumLink = TEXT
lib.impressumLink {
    value = Impressum
    stdWrap.typolink.parameter = 6
    stdWrap.typolink.ATagParams = class="grey-text text-lighten-4 right"
}

lib.backgroundImage = IMG_RESOURCE
lib.backgroundImage {
    stdWrap.wrap (
        <style>
            body{
                background:url(|) no-repeat center center fixed; 
                -webkit-background-size: cover; 
                -moz-background-size: cover; 
                -o-background-size: cover; 
                -khtml-background-size: cover; 
                -ms-background-size: cover; 
                background-size: cover; 
                height: 100%;
            }
        </style>
    )
    file.import.data = levelmedia:-1, slide
    file.treatIdAsReference = 1
}



