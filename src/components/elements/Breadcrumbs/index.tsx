import Link from 'next/link';
import React, {Fragment, ReactNode} from 'react';
import styled from 'styled-components';

export type CrumbItem = {
    label: ReactNode;
    path: string;
};
export type BreadcrumbsProps = {
    items: CrumbItem[];
};

export const Breadcrumbs = ({items}: BreadcrumbsProps) => {
    return (
        <Wrapper>
            {items.map((crumb, i) => {
                const isLastItem = i === items.length - 1;
                if (!isLastItem) {
                    return (
                        <Fragment key={i}>
                            <Link
                                href={crumb.path}
                                key={i}
                            >
                                {crumb.label}
                            </Link>
                            <span> / </span>
                        </Fragment>
                    );
                } else {
                    return crumb.label;
                }
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  span {
    margin: 0 6px;
  }
`;
