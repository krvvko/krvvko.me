import './index.scss'
import Title from "../Title";
import {anOldHope, CodeBlock,} from "react-code-blocks";

const Creation = () => {

    let theme = anOldHope;

    return (

        <div className="d-container">
            <Title />

            <h1 id="main">Creation</h1>
            <span className="date">Oct 15, 2022</span>
            <p>In this article I will describe the created site, its functionality, and how it was implemented.</p>
            <br/>
            <p>Since my experience in JavaScript is not so great, a lot of the functionality works with God's help, but the main thing is that it works - right?</p>
            <br/>
            <p>This article will have several described functions. By itself, the code in them can be quite simple
                and logical, but let me remind you that this is my first experience using this language in the way you see now. If you find an error in my code,
                or want to give some advice, then welcome to <a href="/contacts" className="default-link">Contacts</a>!</p>


            <h2>These Code Blocks</h2>
            <p>I used <a className="default-link" href="https://github.com/rajinwonderland/react-code-blocks" target="_blank" rel="noreferrer">this library</a> to facilitate the display of code with syntax highlighting, a good library, with many themes, and support for many languages. </p>
            <h3>Installation:</h3>
            <span className="code-block">
                <CodeBlock
                    text={
                    "npm i react-code-blocks"
                    }
                    language={"shell"}
                    showLineNumbers={false}
                    startingLineNumber={1}
                    theme={theme}
                    wrapLines
                />
            </span>

            <h3>Usage:</h3>
            <span className="code-block">
                <CodeBlock
                    text={
                        "<CodeBlock\n" +
                        "    text={code}\n" +
                        "    language={lang}\n" +
                        "    showLineNumbers={true}\n" +
                        "    startingLineNumber={1}\n" +
                        "    theme={theme}\n" +
                        "    wrapLines\n" +
                        "/>"
                    }
                    language={"jsx"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={theme}
                    wrapLines
                />
            </span>


            <h2>Experience chart</h2>
            <p>With the help of this library, I made a table of experience with various languages, frameworks, and so on. the use of <a className="default-link"
                href="https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/legend_title/#customize-the-appearance" target="_blank" rel="noreferrer">this library</a> was not so easy,
                because the documentation was not of the best quality, and you had to learn how to use it with the help of examples. But as you can
                see in the Projects, I did it.
            </p>
            <h3>Installation:</h3>
            <span className="code-block">
                <CodeBlock
                    text={
                        "npm i --save @devexpress/dx-react-chart-material-ui\n"
                    }
                    language={"shell"}
                    showLineNumbers={false}
                    startingLineNumber={1}
                    theme={theme}
                    wrapLines
                />
            </span>

            <h3>Usage:</h3>
            <span className="code-block">
                <CodeBlock
                    text={
                        "<Paper>\n" +
                        "   <Grid rows={rows} columns={columns} />\n" +
                        "   <SortingState />\n" +
                        "   <SearchState value={searchValue} onValueChange={setSearchState} />\n" +
                        "   <IntegratedFiltering />\n" +
                        "   <IntegratedSorting />\n" +
                        "   <Table />\n" +
                        "   <TableHeaderRow showSortingControls/>\n" +
                        "   <Toolbar />\n" +
                        "   <SearchPanel />\n" +
                        "   </Grid>\n" +
                        "</Paper>"
                    }
                    language={"jsx"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={theme}
                    wrapLines
                />
            </span>

        </div>
    )
}


export default Creation;