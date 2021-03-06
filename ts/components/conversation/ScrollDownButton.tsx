import React from 'react';
import classNames from 'classnames';

import { LocalizerType } from '../../types/Util';

export type Props = {
  withNewMessages: boolean;
  conversationId: string;

  scrollDown: (conversationId: string) => void;

  i18n: LocalizerType;
};

export const ScrollDownButton = ({
  conversationId,
  withNewMessages,
  i18n,
  scrollDown,
}: Props): JSX.Element => {
  const altText = withNewMessages ? i18n('messagesBelow') : i18n('scrollDown');

  return (
    <div className="module-scroll-down">
      <button
        type="button"
        className={classNames(
          'module-scroll-down__button',
          withNewMessages ? 'module-scroll-down__button--new-messages' : null
        )}
        onClick={() => {
          scrollDown(conversationId);
        }}
        title={altText}
      >
        <div className="module-scroll-down__icon" />
      </button>
    </div>
  );
};
