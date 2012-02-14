//
//  OutlineSupport.c
//  Notes
//
//  Created by Ryan Ashcraft on 2/14/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#include "Outline.h"
#include "ListItem.h"

@implementation Outline (CoreDataGeneratedAccessors)

- (void)addChildrenObject:(ListItem *)value {
    NSMutableOrderedSet *tempSet = [NSMutableOrderedSet orderedSetWithOrderedSet:self.children];
    [tempSet addObject:value];
    self.children = tempSet;
}

- (void)removeChildrenAtIndexes:(NSIndexSet *)indexes {
    NSMutableOrderedSet *tempSet = [NSMutableOrderedSet orderedSetWithOrderedSet:self.children];
    [tempSet removeObjectsAtIndexes:indexes];
    for (int i = 0; i < [tempSet count]; i++) {
        [(ListItem *)[tempSet objectAtIndex:i] setIndex:[NSNumber numberWithInt:i]];
    }
    self.children = tempSet;
}

@end