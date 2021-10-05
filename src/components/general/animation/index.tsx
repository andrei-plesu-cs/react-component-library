import React, { useCallback, useState } from 'react';
import { keyframes } from 'styled-components';
import AnimationContainer from '../../../styled-components/AnimationContainer';
import { AnimationProps } from '../../../utils/animations-util/AnimationsUtil';
import FilledButtonComponent from '../../buttons/filled-button';

export type AnimationComponentProps = {

} & AnimationProps

const AnimationComponent = (props: AnimationComponentProps) => {

    /** DEFINE THE STATE BELLOW */

    /** This is used to rerender the animation container so any modification in the props would retrigger the
     * animation visually for the user to see its effects
     */
    const [keyState, setKeyState] = useState(1)


    /** DEFINE THE HANDLERS BELLOW */

    const recomputeAnimation = useCallback(
        () => {
            setKeyState(curr => curr + 1);
        },
        [setKeyState]
    )

    /** define the return statement bellow */
    return (
        <React.Fragment>
            <div style={{marginBottom: '1rem'}}>
                <FilledButtonComponent elementType="primary" onClick={recomputeAnimation}>
                    Recompute animation
                </FilledButtonComponent>
            </div>

            <AnimationContainer {...props} key={keyState}>
                <div style={{ padding: '1rem', border: '1px solid black' }}>
                    <h1>This block will use the animation configured through the props</h1>
                </div>
            </AnimationContainer>
        </React.Fragment>
        
    )

}

/** export the component */
export default AnimationComponent;