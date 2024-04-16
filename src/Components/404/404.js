import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Wrapper from "../../layout";

function PageNotFoundPage() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
        />
    );
}
// const PageNotFoundPage = Wrapper(NotFoundPage);
export default PageNotFoundPage;
