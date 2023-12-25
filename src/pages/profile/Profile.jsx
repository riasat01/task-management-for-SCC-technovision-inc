import useAuth from "../../custom-hooks/use-auth/useAuth";


const Profile = () => {
    const {user} = useAuth();
    return (
        <div className="flex flex-col md:flex-row justify-center items-center pt-24 text-white">
            <img className="w-96 h-96 p-8 rounded-full" src={user?.photoURL} alt="" />
            <section>
                <h1 className="text-3xl font-bold">User Name: {user?.displayName}</h1>
                <p className="text-xl font-semibold">User Email: {user?.email}</p>
            </section>
        </div>
    );
};

export default Profile;