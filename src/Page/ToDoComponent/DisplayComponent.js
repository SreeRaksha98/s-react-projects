import React from "react";

const DisplayComponent = (props) => {

    /**
     * @param int id
     */
    const getUser = (id) => {
        const user = props.userData.users?.find( (user) => user.id === id )
        if(!user){
            return {firstName : 'guest', lastName : ' ', email : 'guest@gmail.com'}
        }
        return user
    }

    return (
        <table class="table-fixed">
            <tr>
                <th class=" border md:px-4 md:py-2">Name</th>
                <th class=" border md:px-4 md:py-2"> Email</th>
                <th class=" border md:px-4 md:py-2">User Id</th>
                <th class=" border md:px-4 md:py-2">ToDo</th>
            </tr>
            {props.filteredToDo?.map((todo) => {
                const user = getUser(todo.userId)
                return (
                    
                    <tr>
                        <td class=" border md:px-4 md:py-2"> {user?.firstName + ' ' + user?.lastName}</td>
                        <td class=" border md:px-4 md:py-2">{user?.email}</td>
                        <td class=" border md:px-4 md:py-2">{todo.userId}</td>
                        <td class=" border md:px-4 md:py-2">{todo.todo}</td>
                    </tr>
                    
                )
            })}

        </table>
    )
}

export default DisplayComponent