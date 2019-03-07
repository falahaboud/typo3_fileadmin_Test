mod.SHARED {
        defaultLanguageFlag = de
        defaultLanguageLabel = Deutsch
}

mod.web_layout.BackendLayouts {

  home {
    title = Home
    icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
    config {
      backend_layout {
        colCount = 0
        rowCount = 0
      }
    }
  }

  contentPage1Column {
    title = Einspaltige Inhaltsseite
    icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
    config {
      backend_layout {
        colCount = 1
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Inhalt
                colPos = 0
              }
            }
          }
        }
      }
    }
  }

  contentPage2Column {
    title = Zweispaltige Inhaltsseite
    icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
    config {
      backend_layout {
        colCount = 2
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Inhalt links
                colPos = 0
              }
              2 {
                name = Inhalt Rechts
                colPos = 1
              }
            }
          }
        }
      }
    }
  }

}