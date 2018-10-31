import theme from '../../../config/theme';

const styles = {
  userView: {
    activityIndicator: {
      _: {
        marginTop: 16
      }
    },
    headerContainer: {
      _: {
        backgroundColor: theme.color.primary,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center'
      },
      avatar: {
        _: {
          width: 80,
          height: 80,
          borderRadius: 40,
          borderWidth: 2,
          borderColor: '#fff'
        }
      },
      userFullName: {
        _: {
          fontSize: 17,
          color: '#fff',
          marginTop: 16
        }
      },
      repoAvatar: {
        _: {
          width: 40
        }
      },
      repoName: {
        _: {
          fontWeight: 'bold',
          fontSize: 17
        }
      },
      statisticContainer: {
        _: {
          marginLeft: 56
        }
      }
    }
  },
  userList: {
    mainContainer: {
      _: {
        flex: 1,
        backgroundColor: 'white'
      },
      userAvatar: {
        _: {
          height: 44,
          width: 44,
          borderRadius: 22
        }
      }
    }
  }
};

export default styles;
