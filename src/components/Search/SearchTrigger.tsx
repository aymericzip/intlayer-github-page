import {
  Button,
  KeyboardShortcut,
  Modal,
  ModalSize,
} from '@intlayer/design-system';
import { Search } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';
import { type FC, useState } from 'react';
import { SearchView } from './SearchView';

export const SearchTrigger: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchButton } = useIntlayer('doc-search-trigger');

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <div className="px-4 mb-4">
      <Button
        variant="input"
        color="custom"
        size="md"
        label={searchButton.label.value}
        onClick={toggleModal}
        isFullWidth
        textAlign="left"
        className='pr-1'
      >
        <div className="flex items-center justify-between gap-2">
          <Search size={18} />
          <span>{searchButton.text}</span>
        <KeyboardShortcut shortcut="/" onTriggered={toggleModal} className='flex justify-between items-center' />
        </div>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={ModalSize.LG}
        padding="md"
        hasCloseButton
      >
        <SearchView isOpen={isOpen} onClickLink={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};
