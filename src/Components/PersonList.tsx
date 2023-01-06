type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

const PersonList = (props: PersonListProps) => {

    return (
        <div>
            {
                props.names.map((val) => (
                    <>
                    <h1>{val.first} {val.last}</h1>
                    </>
                ))
            }
        </div>
    )
}

export default PersonList;