const fs = require('fs');
const args = process.argv.slice(2);
const toKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

const componentName = args[0];
const folderName = `./${componentName}`;
const componentFileName = `${componentName}.js`;
const stylesFileName = `${componentName}.scss`;
const storybookFileName = `${componentName}.stories.js`;

const indexText = `import ${componentName} from "./${componentName}";\n\nexport default ${componentName};`
const componentFileText = `
import React from 'react';
import "./${componentName}.scss";

export default function ${componentName}(props) {
  return (
    <div className="${toKebabCase(componentName)}">
      
    </div>
  )
}
`
const stylesFileText = `.${toKebabCase(componentName)} {\n  \n}`;
const storybookFileText = `
import React from "react";
import { storiesOf } from "@storybook/react";
import ${componentName} from "./${componentName}";

const defaultProps = {};

storiesOf("${componentName}", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <${componentName} {...defaultProps} />);
`

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        process.chdir(folderName);

        fs.writeFileSync(componentFileName, componentFileText);
        fs.writeFileSync(stylesFileName, stylesFileText);
        // fs.writeFileSync(storybookFileName, storybookFileText);
        fs.writeFileSync("index.js", indexText)
    }
} catch (err) {
    console.error(err)
}
