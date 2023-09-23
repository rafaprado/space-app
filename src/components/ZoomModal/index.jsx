import styled from "styled-components";
import Image from "../Gallery/image";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
`;

const StyledDialog = styled.dialog`
    position: absolute;
    padding: 0;
    border-radius: 20px;
    background-color: transparent;
    width: 50vw;
    top: 240px;
    border: none;
`;

const DialogContainer = styled.div`
    position: relative;
`;

const CloseButton = styled.button`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 40px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const ZoomModal = ({photo, onCloseImage, onToggleFavorite}) => {
    return(
        <>
            {photo &&
            <>
                <Overlay />
                <StyledDialog open={!!photo} onClose={onCloseImage}>
                    <DialogContainer>
                        <Image onToggleFavorite={onToggleFavorite} photo={photo} expanded={true}/>
                        <form method="dialog">
                            <CloseButton formMethod="dialog">
                                <img src="/icons/fechar.png" alt=""/>
                            </CloseButton>
                        </form>
                    </DialogContainer>
                </StyledDialog>
            </>
            }
        </>
    );
}

export default ZoomModal;