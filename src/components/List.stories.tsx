import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar as MuiAvatar,
  Box as MuiBox,
  Checkbox as MuiCheckbox,
  Grid as MuiGrid,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListItemAvatar as MuiListItemAvatar,
  Radio as MuiRadio,
} from '@mui/material';
import { PersonOutline as MuiPersonOutline, ArrowRight as MuiArrowRight } from '@mui/icons-material';

const meta: Meta<typeof MuiList> = {
  title: 'Example/List',
  component: MuiList,
  tags: ['autodocs'],
  argTypes: {
    // add argTypes for list
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

interface ListItem {
  id: number;
  listTextPrimary?: string;
  listTextSecondary?: string;
  withAction: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

const list: ListItem[] = [
  {
    id: 1,
    listTextPrimary: 'List Item',
    listTextSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withAction: false,
    imageSrc: 'assets/placeholder.png',
    imageAlt: 'alt 1',
  },
  {
    id: 2,
    listTextPrimary: 'List Item',
    listTextSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withAction: true,
    imageSrc: '/assets/placeholder.png',
    imageAlt: 'alt 2',
  },
  {
    id: 3,
    listTextPrimary: 'List Item',
    listTextSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withAction: false,
    imageSrc: '/assets/placeholder.png',
    imageAlt: 'alt 3',
  },
  {
    id: 4,
    listTextPrimary: 'List Item',
    listTextSecondary: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    withAction: true,
    imageSrc: '/assets/placeholder.png',
    imageAlt: 'alt 4',
  },
  {
    id: 5,
    listTextPrimary: 'List Item',
    listTextSecondary: '',
    withAction: false,
    imageSrc: '/assets/placeholder.png',
    imageAlt: 'alt 5',
  },
  {
    id: 6,
    listTextPrimary: 'List Item',
    listTextSecondary: '',
    withAction: true,
    imageSrc: '/assets/placeholder.png',
    imageAlt: 'alt 6',
  },
]

/**
 * Default list item story.
 */
export const Default: Story = {
  args: {
  },
  render: () => {
    return (
      <MuiList>
        <MuiGrid container>
          <MuiGrid item sm={6}>
            <MuiListItem secondaryAction={<MuiCheckbox defaultChecked />}>
              <MuiListItemAvatar>
                <MuiAvatar>AB</MuiAvatar>
              </MuiListItemAvatar>
              <MuiListItemText>List Item</MuiListItemText>
            </MuiListItem>
          </MuiGrid>
          <MuiGrid item sm={6}>
            <MuiListItem secondaryAction={<MuiCheckbox defaultChecked />}>
              <MuiListItemText>List Item</MuiListItemText>
            </MuiListItem>
          </MuiGrid>
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * List story.
 */
export const List: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiCheckbox defaultChecked /> : null}>
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * List with avatar story.
 */
export const Avatar: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiCheckbox defaultChecked /> : null}>
            <MuiListItemAvatar>
              <MuiAvatar>AB</MuiAvatar>
            </MuiListItemAvatar>
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * List with icon story.
 */
export const Icon: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiCheckbox defaultChecked /> : null}>
            <MuiListItemIcon>
              <MuiPersonOutline />
            </MuiListItemIcon>
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * List with image story.
 */
export const Image: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiCheckbox defaultChecked /> : null}>
            <MuiListItemIcon>
              <MuiBox component="div" className="squareImg">
                <MuiBox
                  component="img"
                  src={listItem.imageSrc}
                  alt="alt"
                  className="squareImage"
                />
              </MuiBox>
            </MuiListItemIcon>
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * List with full width image story.
 */
export const FullWidthImage: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiCheckbox defaultChecked /> : null}>
            <MuiListItemIcon>
              <MuiBox
                component="img"
                src={listItem.imageSrc}
                alt="alt"
              />
            </MuiListItemIcon>
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * Checkbox list story.
 */
export const Checkbox: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiArrowRight /> : null}>
            <MuiCheckbox defaultChecked />
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};

/**
 * Radio list story.
 */
export const Radio: Story = {
  args: {
  },
  render: (args) => {
    const listItems = list.map((listItem) => {
      return (
        <MuiGrid item sm={6} key={listItem.id}>
          <MuiListItem secondaryAction={listItem.withAction ? <MuiArrowRight /> : null}>
            <MuiRadio defaultChecked name="radio-buttons" />
            <MuiListItemText primary={listItem.listTextPrimary} secondary={listItem.listTextSecondary} />
          </MuiListItem>
        </MuiGrid>
      )
    });

    return (
      <MuiList subheader={args.subheader}>
        <MuiGrid container spacing={4}>
          {listItems}
        </MuiGrid>
      </MuiList>
    );
  },
};