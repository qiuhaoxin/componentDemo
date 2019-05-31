import React from 'react';

export default function asyncComponentWithBack(importComponent) {

    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        state = {
            component: null,
        }

        async componentDidMount() {
            const {default: component} = await importComponent();
            this.setState({
                component,
            })
        }

        back = () => {
            console.log(`history is : `, history)
            console.log(`location is : `, location)
            location.href=(`${location.origin}/#/mainpage`)
        }

        render() {

            const backStyle = {
                height: '60px',
                padding: '15px 27px',
                boxSizing: 'border-box',
                borderBottom: '1px solid #D9D9D9'
            }

            const btnStyle = {
                backgroundColor: '#fff',
                borderRadius: '4px',
                height: 30,
                width: 60,
                border: '1px solid #D9D9D9'
            }

            const MyComponent = this.state.component;
            return MyComponent && <div>
                <div style={backStyle}>
                    <button style={btnStyle} onClick={this.back}>返回</button>
                </div>
                <MyComponent/>
            </div>
        }
    }

    return AsyncComponent;
}