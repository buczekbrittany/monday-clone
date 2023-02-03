import TicketCard from '../components/TicketCard'

const Dashboard = () => {
    const tickets = [
        {
            category: 'Q1 2023',
            color: 'red',
            title: 'BookishRealm latest video',
            owner: 'Theo Xanos',
            avatar: 'https://img.freepik.com/free-vector/non-binary-flag-heart-shape_1199-304.jpg?w=826&t=st=1675404550~exp=1675405150~hmac=c1e0d7114abcd0372f99b1dd29145ba18279be9d7a25ab57e875d9d2084e3d0d',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing the latest books read by BookishRealm in the month of January.',
            timestamp: '2023-02-02T07:36:17+0000'
        },
        {
            category: 'Q1 2023',
            color: 'red',
            title: 'A Sunny Book Nook latest video',
            owner: 'Theo Xanos',
            avatar: 'https://img.freepik.com/free-vector/non-binary-flag-heart-shape_1199-304.jpg?w=826&t=st=1675404550~exp=1675405150~hmac=c1e0d7114abcd0372f99b1dd29145ba18279be9d7a25ab57e875d9d2084e3d0d',
            status: 'done',
            priority: 2,
            progress: 70,
            description: 'Make a video showcasing sapphic book recommendations based on films.',
            timestamp: '2023-02-02T07:36:17+0000'
        },
        {
            category: 'Q2 2023',
            color: 'purple',
            title: 'Mile Higher podcast',
            owner: 'Theo Xanos',
            avatar: 'https://img.freepik.com/free-vector/non-binary-flag-heart-shape_1199-304.jpg?w=826&t=st=1675404550~exp=1675405150~hmac=c1e0d7114abcd0372f99b1dd29145ba18279be9d7a25ab57e875d9d2084e3d0d',
            status: 'done',
            priority: 3,
            progress: 10,
            description: 'Watch the latest Mile Higher video',
            timestamp: '2023-02-02T07:36:17+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    console.log(uniqueCategories);

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard