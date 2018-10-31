import React, { Component } from 'react';
import { Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { STATE_USERS } from '../constants';
import { Image, Subtitle, Caption, Row, View, Divider } from '@shoutem/ui';
import theme from '../../../config/theme';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './stylesheet';

const { userView } = styles;
class UserView extends Component {
  renderHeader() {
    const { selectedUserData } = this.props;

    return (
      <View style={userView.headerContainer._}>
        {selectedUserData.avatar_url && (
          <Image
            styleName="small-avatar"
            source={{
              uri: selectedUserData.avatar_url
            }}
            style={userView.headerContainer.avatar._}
          />
        )}
        <Text style={userView.headerContainer.userFullName._}>
          {selectedUserData.name}
        </Text>
      </View>
    );
  }
  renderLoading() {
    if (this.props.selectedUserRepos.length > 1) return null;

    return (
      <ActivityIndicator
        size="large"
        color={theme.color.primary}
        style={userView.activityIndicator._}
      />
    );
  }

  renderRepos() {
    return this.props.selectedUserRepos.map(repo => {
      return (
        <View>
          <Row>
            <Image
              styleName="small-avatar top"
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoLkQi88nL9hJV0iDIJKPl9PEqembr1XCpg___eMmEF1tiNF4'
              }}
              style={userView.headerContainer.repoAvatar._}
            />
            <View styleName="vertical">
              <View styleName="horizontal space-between">
                <Subtitle style={userView.headerContainer.repoName._}>
                  {repo.name}
                </Subtitle>
              </View>
              <Text styleName="multiline">{repo.description}</Text>
            </View>
          </Row>
          <Row>
            <View
              styleName="horizontal space-between"
              style={userView.headerContainer.statisticContainer._}
            >
              <Caption>
                <Icon name="star" size={16} /> {repo.stargazers_count}
              </Caption>
              <Caption>
                <Icon name="source-fork" size={16} /> {repo.forks}
              </Caption>
              <Caption>
                <Icon name="forum" size={16} />
                {repo.open_issues_count}
              </Caption>
            </View>
          </Row>
          <Divider styleName="line" />
        </View>
      );
    });
  }
  componentDidMount() {}
  render() {
    const { selectedUserData } = this.props;
    return (
      <SafeAreaView style={theme.container.safeAreaView}>
        {this.renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderLoading()}
          {this.renderRepos()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { selectedUserRepos, selectedUserData } = state[STATE_USERS];

  return { selectedUserRepos, selectedUserData };
};
export default connect(mapStateToProps)(UserView);
