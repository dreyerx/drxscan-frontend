import { Skeleton, Tag as ChakraTag } from '@chakra-ui/react';
import type { TagProps } from '@chakra-ui/react';
import React from 'react';

import TruncatedTextTooltip from 'ui/shared/TruncatedTextTooltip';

interface Props extends TagProps {
  isLoading?: boolean;
}

const Tag = ({ isLoading, ...props }: Props) => {

  if (props.isTruncated && typeof props.children === 'string') {
    if (!props.children) {
      return null;
    }

    return (
      <Skeleton isLoaded={ !isLoading } display="inline-block" borderRadius="sm" maxW="100%">
        <TruncatedTextTooltip label={ props.children }>
          <ChakraTag { ...props }/>
        </TruncatedTextTooltip>
      </Skeleton>
    );
  }
  return (
    <Skeleton isLoaded={ !isLoading } display="inline-block" borderRadius="sm" maxW="100%">
      <ChakraTag { ...props }/>
    </Skeleton>
  );
};

export default React.memo(Tag);