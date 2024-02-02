import React from "react";

const Footer = () => {
    return (
        <StyledFooter>
            <p>
                &copy; {new Date().getFullYear()} The Bridge. All rights reserved.
            </p>
        </StyledFooter>
    );
};

export default Footer