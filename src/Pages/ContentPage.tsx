import React from 'react';
// import {useParams} from 'react-router-dom'
import Content from '../components/Content';

const ContentPage: React.FC = () => {
  // const match = useParams();
  // const newsId = match.id || "";

  // const newsData = useSelector<RootState, RootState["user"]["authUser"]>(
  //   (store) => store.user.authUser
  // );

  // useEffect(() => {
  //   dispatch(userActions.fetchUser(newsId));
  // }, [match.id, newsData.id]);

  return (
    <Content />
  );
}

export default ContentPage;