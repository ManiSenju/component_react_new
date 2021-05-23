import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
              <CommentDetail author="Mani Senju" text="Good BlogSpot" timeAgo="Today at 20:00" image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
              <CommentDetail author="Madara Uchiha" text="Good Day" timeAgo="Today at 21:00" image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
              <CommentDetail author="Hashirama Senju" text="NIce..." timeAgo="Today at 22:00" image={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);