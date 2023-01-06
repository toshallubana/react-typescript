
type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.name} {props.messageCount} is logged In {props.isLoggedIn}
        </div>
    )
}
export default Greet;