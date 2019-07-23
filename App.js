import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react'
import PropTypes from 'prop-types';
/*
Clase principal de la aplicacion
*/
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : "",
      config:{
        toolbarGroups : [
          { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
          { name: 'forms', groups: [ 'forms' ] },
          { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
          { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
          { name: 'links', groups: [ 'links' ] },
          { name: 'insert', groups: [ 'insert' ] },
          { name: 'styles', groups: [ 'styles' ] },
          { name: 'colors', groups: [ 'colors' ] },
          { name: 'tools', groups: [ 'tools' ] },
          { name: 'others', groups: [ 'others' ] },
          { name: 'about', groups: [ 'about' ] }
        ],
        filebrowserUploadUrl : props.filebrowserUploadUrl
      }
    };
    this.registerEventHandlers();
    this.editorRef = React.createRef();
  }



  registerEventHandlers(){
    this.onChange = this.onChange.bind(this);
  }

  componentWillUnmount(){
    let editor = this.editorRef.current;
    if(editor != undefined && this.editor != null){
      console.log(editor);
      editor.destroy(true);
    }
  }

  onChange(evt){
    if(evt != undefined && evt.editor != undefined){
      let data = evt.editor.getData();
      console.log(evt.editor);
      this.setState({data});
    }
  }

  render(){
    return(
      <div>
      <CKEditor
      ref = {this.editorRef}
      onChange={this.onChange}
      config = {this.state.config}
      />
      <p>{this.state.data}</p>
      </div>
    );
  }
}
App.propTypes = { filebrowserUploadUrl: PropTypes.string };
export default App;
