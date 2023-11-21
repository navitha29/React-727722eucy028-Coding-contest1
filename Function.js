function Function()
{
    return <Greeting name="Navi"/>
}
function Greeting(props)
{
    return(
        <h3>Hello Everynyan,{props.name} !Nice to meet you!</h3>
    );
}
export default Function;