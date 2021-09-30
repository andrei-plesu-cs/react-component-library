import styled from 'styled-components';

const Skeleton = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: #d3d3d3;
    box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);

    &::after {
        z-index: 3;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: shimmer 1.5s infinite;
        content: '';
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
`;

export default Skeleton;