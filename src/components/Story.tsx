export default function Story({img, username}:Props) {

    return (
        <>
            <img src={img} alt={username} />
            <p>{username}</p>
        </>
    )
}

//types

type Props = {
    img: string;
    username: string;
}