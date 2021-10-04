import React from 'react';
import DividerWrapper from './Divider.wrapper';

export type DividerComponentProps = {
    color?: string;
    hiddenContent?: boolean;
    noSpace?: boolean;
    middleAreaRenderer?: () => React.ReactNode;
}

const DividerComponent = ({
    middleAreaRenderer,
    color,
    hiddenContent = false,
    noSpace = false
}: DividerComponentProps) => {

    /** define the return statement bellow */
    return (
        <DividerWrapper 
            color={color} 
            noSpace={noSpace} 
            hiddenContent={hiddenContent}
        >

            {
                middleAreaRenderer ?
                (
                    <React.Fragment>
                        <div className="divider-line"></div>
                        <div className="divider-middle-area-wrapper">
                            {middleAreaRenderer()}
                        </div>
                        <div className="divider-line"></div>
                    </React.Fragment>       
                )
                :
                (
                    <div className="divider-line"></div>
                )
            }

        </DividerWrapper>
    )

}

/** export the component */
export default DividerComponent;