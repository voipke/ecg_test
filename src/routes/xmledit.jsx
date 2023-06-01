import React, { Component } from 'react';
import { Button, Input, message, Modal } from 'antd';
import { invoke } from '@tauri-apps/api/tauri'

class XmlEditor extends Component {
    state = {
        visible: false,
        xmlContent: '',
        editedXmlContent: '',
    };

    modifyB = (xmlContent) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, 'application/xml');

        const elements = xmlDoc.querySelectorAll('B');

        elements.forEach((element) => {
            const currentAttribute = element.getAttribute('D');
            const currentContent = 'element.textContent';

            // 根据需要进行值的修改
            // const modifiedContent = currentContent.toUpperCase();
            let arr = currentAttribute.split(",");
            arr[0] = arr[0] + '(' + (arr[0] / 250).toFixed(2)  +')';
            const modifiedContent = arr.join(',');
            element.setAttribute('D', `${modifiedContent}`);
            // element.textContent = modifiedContent;
        });

        const serializer = new XMLSerializer();
        const modifiedXmlContent = serializer.serializeToString(xmlDoc);

        return modifiedXmlContent;
    }

    handleOpen = () => {
        // invoke('greet', {name:'zhagnsan'}).then((msg) =>{
        //     console.log(msg)
        // });

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xml';

        fileInput.onchange = e => {
            if (!e || !e.target) {
                console.log("fileInput onchange error");
                return;
            }
            const file = e?.target?.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = () => {
                    const xmlContent = reader.result;
                    
                    let xmlContent1 = this.modifyB(xmlContent);
                    this.setState({ xmlContent, editedXmlContent: xmlContent1, visible: true, });
                };
                reader.readAsText(file);
            }
        };

        fileInput.click();
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleSave = () => {
        const { editedXmlContent } = this.state;
        // 在这里可以执行保存逻辑，例如将修改后的XML内容发送到服务器
        message.success('保存成功');
        this.handleCancel();
    };

    handleContentChange = e => {
        this.setState({ editedXmlContent: e.target.value });
    };

    render() {
        const { visible, xmlContent, editedXmlContent } = this.state;

        return (
            <div className="container">
                <Button type="primary" onClick={this.handleOpen}>打开</Button>

                <Input.TextArea
                    className="editor"
                    rows={20}
                    autoSize={true}
                    showCount={true}
                    value={editedXmlContent}
                    onChange={this.handleContentChange}
                />
            </div>
        );
    }
}

export default XmlEditor;
