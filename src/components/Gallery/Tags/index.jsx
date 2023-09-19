import styled from 'styled-components';
import tags from './tags.json';

const StyledTag = styled.button`
    display: inline-flex;
    border: none;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.3);
    color: #FFF;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    border: 2px solid transparent;
    padding: 10px 8px;

    &:hover {
        border-color: #C98CF1;
    }
`;

const TagTitle = styled.p`
    color: #D9D9D9;
    font-size: 24px;
`;

const SearchTagsContainer = styled.div`
    display: flex;
    align-items: baseline;
    gap: 40px;
`;

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const Tags = () => {
    return ( <SearchTagsContainer>
        <TagTitle>Busque por tags:</TagTitle>
        <TagsContainer>
            {tags.map(tag => <StyledTag type='button' key={tag.id}>{tag.titulo}</StyledTag>)}
        </TagsContainer>
    </SearchTagsContainer>
    );
}

export default Tags;