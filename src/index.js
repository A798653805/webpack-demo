
async function getComponent() {
    const element = document.createElement('div');

    const { default: _ } = await import('loadsh');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
    // return import(/* webpackChunkName: "lodash" */ 'loadsh'),then( ({default: _})=>{
    //     const element = document.createElement('div');

    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //     return element
    // }).catch(error => 'An error occurred thild loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
})