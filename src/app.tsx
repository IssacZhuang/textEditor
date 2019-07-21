import * as React from 'react';
import Editor from './component/editor'

const cb={
    para:()=>{
        console.log('callback依赖注入实现');
    }
}

class App extends React.Component {
    render() {
        return (
            <div >
                <Editor callback={cb} />
            </div>
        )
    }
    componentDidMount(){
        
    }
}

export default App;