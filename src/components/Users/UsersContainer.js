import {connect} from "react-redux";
import {getUsers, setCurrentPage, userFollowing} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsersPageSelector} from "../../redux/selectors";


class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        if (this.props.isFetching) return <Preloader/>
        return <>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChange={this.onPageChange}
                setToggleFollowingInProgress={this.props.setToggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
                userFollowing={this.props.userFollowing}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    const usersPage = getUsersPageSelector(state)

    return {
        users: usersPage.users,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage,
        isFetching: usersPage.isFetching,
        followingInProgress: usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    setCurrentPage, getUsers, userFollowing
})(UsersComponent)

