const UpdateRoom = (props) => {
    return ( 
        <CreateAndUpdateForm 
            defaultVotes={props.defaultVotes}
            handleGuestCanPauseChange={props.handleGuestCanPauseChange}
            handleVotesChange={props.handleVotesChange}
            handleRoomButtonClick={props.handleRoomButtonClick}
        />
     )
}
 
export default UpdateRoom