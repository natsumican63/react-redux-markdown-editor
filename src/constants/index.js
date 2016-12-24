export const DEFAULT_TEXT = 
  `# React+Redux+Material-UI Markdown Editor

  React+Redux+Material-UI で MarkdownEditor

   * [react-markdown](https://github.com/rexxars/react-markdown)
   * [Material-UI](http://www.material-ui.com/)`;

export const STYLES = {
  header: {
    display: 'block',
    position: 'fixed',
    top:'0',
    height: '3em',
    width: '100vw',
    fontFamily: 'Space Mono',
    textAlign: 'center',
    color:'#F9F9F9',
    backgroundColor: '#F25F5C',
    zIndex:'999',
  },
  root: {
    display: 'flex',
  },
  markdown: {
    marginTop:30,
    padding: 20,
    height:'100vh',
    flex: 1,
    justifyContent: 'center',
    overflowY: 'auto',
    backgroundColor:'#FFFDF2',
  },
  preview: {
    marginTop:30,
    padding: 10,
    height:'100vh',
    flex: 1,
    justifyContent: 'center',
    overflowY: 'auto',
  },
  input: {
    width:'100%',
  }
};