//
//  Outline.m
//  Notes
//
//  Created by Smith Tanner on 2/11/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import "Outline.h"
#import "ListItem.h"


@implementation Outline

@dynamic timeStamp;
@dynamic title;
@dynamic children;

- (void)addChildrenObject:(ListItem *)value {
    NSMutableOrderedSet *tempSet = [NSMutableOrderedSet orderedSetWithOrderedSet:self.children];
    [tempSet addObject:value];
    self.children = tempSet;
}

@end
