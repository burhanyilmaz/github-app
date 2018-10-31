import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { Divider, Row, Image } from '@shoutem/ui';
import { SCREEN_USER_VIEW, STATE_USERS } from '../constants';
import { UserSearchBar } from '../';
import { searchUser, selectUser } from '../actions/UsersActions';
import theme from '../../../config/theme';
import styles from './stylesheet';
const { userList } = styles;
console.disableYellowBox = true;
class UserList extends PureComponent {
  constructor() {
    super();
    this.state = {
      searchUser: 'facebook',
      loading: false
    };
  }
  renderUserList() {
    return this.props.users.map(user => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.selectUser(user.login);
            this.props.navigation.navigate(SCREEN_USER_VIEW, {
              user: user.login
            });
          }}
        >
          <Row key={user.id} styleName="small">
            <Image
              style={userList.mainContainer.userAvatar._}
              source={{
                uri: user.avatar_url
              }}
            />
            <Text>{user.login}</Text>
          </Row>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    });
  }

  onSearchChangeText = value => {
    this.setState({ searchUser: value });
  };

  iconPress = () => {
    this.props.searchUser(this.state.searchUser);
  };

  renderLoading() {
    const { loading } = this.props;

    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color={theme.color.primary}
          style={{ marginTop: 16 }}
        />
      );
    }
  }

  componentDidMount() {
    this.props.searchUser('facebook');
  }
  render() {
    return (
      <View style={userList.mainContainer._}>
        <UserSearchBar
          iconPress={this.iconPress}
          onSearchChangeText={this.onSearchChangeText}
          value={this.state.searchUser}
        />
        <Divider styleName="line" />
        {this.renderLoading()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderUserList()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { users, loading } = state[STATE_USERS];

  return { users, loading };
};

export default connect(
  mapStateToProps,
  { searchUser, selectUser }
)(UserList);
